import { Component } from '@angular/core';
import { Http } from "@angular/http";



@Component({
    selector: 'students',
    templateUrl: './app/components/students/students.component.html'
})

export class studentsComponent {
    public student: StudentMasters[] = [];
    public studentDetail: any;
    myName: string;
    open: boolean = false;
    activeRow: string = "0";
    constructor(public http: Http) {
        this.myName = "Krishna";
        this.getStudentMasterData();
    }

    getStudentMasterData() {

        this.http.get('/Api/SampleData').subscribe(result => {
            this.student = result.json();
        });
    }

    getStudentsDetails(StudID: number) {
        this.open = true;
        this.studentDetail = this.student[StudID - 1];
        //this.http.get('/Api/SampleData/' + StudID).subscribe(result => {
        //    this.studentDetail = result.json();
        //    console.log(this.studentDetail);
        //});

    }

    Save(studentDetail: StudentMasters) {

        if ((this.student[studentDetail.StdID - 1] != null
            && this.student[studentDetail.StdID - 1] != undefined)
            && studentDetail.StdID == this.student[studentDetail.StdID - 1].StdID) {
            alert("Updated successfully");

        }
        else {
            alert("Saved successfully");
            this.student.push(studentDetail);
        }
    }

    Delete(studid: number) {
        this.student.splice(studid - 1);
        alert("Deleted successfully");
    }



    Cancel() {
        this.open = false;
        
    }

    Add() {
        this.open = true;
        this.studentDetail = {} as  StudentMasters;
    }

}

//// For Student Master
export interface StudentMasters {
    StdID: number;
    StdName: string;
    Email: string;

}
