import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { pull, forEach, isString } from 'lodash';
import *  as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class AjxAutocompleteService {

  private subject = new BehaviorSubject([]);
  suggestions$: Observable<any[]> = this.subject.asObservable();
  keyword: string;
  public staticDataSourceMapped = [];
  public data_source:any = [];
  public PropertyName:any=''

  constructor(private http: HttpClient) { }

  highlightMatches = (finding: string): any => {
    const matched = finding.match(new RegExp(this.keyword, "gi"));
    const splitted = finding.split(new RegExp(this.keyword, "i"));
    let position = 1;
    for (let i = 0; i < matched.length; i++) {
      splitted.splice(position, 0, matched[i]);
      position = position + 2;
    }
    pull(splitted, '');
    let splittedObj: any = {};
    splitted.forEach(function(string, index){
      splittedObj[index] = {value: string, class: string.indexOf(' ') === 0 ? 'inline' : 'inline-block'};
    });


    let suggestion: any = {};
    suggestion.data = _.filter( this.data_source,{[this.PropertyName]:finding})[0];

    suggestion.full = finding;
    suggestion.splitted = (<any>Object).entries(splittedObj);
    return suggestion;
  }

  getSuggestonsfromStaticDataSource(doQuery: boolean,
                                    keyword: string,
                                    staticDataSource: any[],
                                    suggestionPropName? : string): Observable<any[]> {
    this.keyword = keyword;
    this.PropertyName = suggestionPropName;
    this.data_source = staticDataSource;
    if (doQuery) {
      if (!/\S/.test(keyword)) {
        return of([]);
      } else {
        const output = [];
        if (suggestionPropName) {
          this.staticDataSourceMapped = staticDataSource.map(element => element[suggestionPropName]);
        } else {
          this.staticDataSourceMapped = staticDataSource;
        }
        if ( this.staticDataSourceMapped.length > 0 && isString( this.staticDataSourceMapped[0])) {
          forEach( this.staticDataSourceMapped, (element: string) => {
            if (element.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
              output.push(element);
            }
          });
        } else {
          console.error('Please provide with suggestionPropName!');
          return of([]);
        }
        if (output.length > 0) {
          const outputHighlighted = output.map(this.highlightMatches);
          return of(outputHighlighted).pipe(tap((response: any[]) => this.subject.next(response)));
        } else {
          return of([]);
        }
      }
    } else {
      return of([]);
    } 
  }

  getSuggestonsfromApi(doQuery: boolean,
                      keyword: string,
                      apiString: string,
                      paramName: string,
                      payloadPropName?: string,
                      suggestionPropName? : string): Observable<any[]> {
      this.keyword = keyword;
      if (doQuery) {
        if (!/\S/.test(keyword)) {
          return of([]);
        } else {
              return this.http.get(apiString, { params: { [paramName]: keyword } })
                  .pipe(
                    map((response: any) => {
                      if (payloadPropName !== null) {
                        if (suggestionPropName !== null) {
                          return response[payloadPropName].map((value: { [x: string]: any; }) => value[suggestionPropName]).map(this.highlightMatches);
                        } else {
                          return response[payloadPropName].map(this.highlightMatches);
                        }
                      } else {
                        if (suggestionPropName !== null) {
                          return response.map((value: { [x: string]: any; }) => value[suggestionPropName]).map(this.highlightMatches);
                        } else {
                          return response.map(this.highlightMatches);
                        }
                      }
                    }),
                    tap((response: any[]) => this.subject.next(response))
                  );
        }
      } else {
        return of([]);
      }   
  }

}