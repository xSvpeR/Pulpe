import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ObservableHelper} from "../../_helpers/ObservableHelper";
import {Observable} from "rxjs";
import {Member} from "../../_model/Member";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class MemberService extends ObservableHelper {

  constructor(private http: Http, private localStorageService: LocalStorageService) {
    super();
  }

  public findById(id: string): Observable<Member | string> {
    let memberLocallyStored: string = this.localStorageService.get<string>('member');
    if (memberLocallyStored) {
      let rawMember = JSON.parse(memberLocallyStored);
      return Observable.of(new Member().initFromRawObject(rawMember));
    } else {
      return this.http.get('http://localhost:5000/members/' + id)
        .map(response => {
          const data: any = this.extractDataOf(response);
          return Member.of()
            .id(data.member._id)
            .lastName(data.member.lastName)
            .firstName(data.member.firstName)
            .measurements(data.member.measurements)
            .objective(data.member.objective)
            .build();
        }).catch(this.handleError);
    }
  }

}