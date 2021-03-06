import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Member} from "../../_model/Member";


@Component({
    selector: 'pulpe-profile-infos',
    templateUrl: 'profile-infos.component.html',
    styleUrls: ['profile-infos.component.css'],
})
export class ProfileInfosComponent implements OnInit {
    @Input() member: Member;

    constructor() {
    }

    ngOnInit() {
        console.dir(this.member);
    }

}
