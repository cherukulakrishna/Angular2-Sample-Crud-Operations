"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var studentsComponent = (function () {
    function studentsComponent(http) {
        this.http = http;
        this.student = [];
        this.open = false;
        this.activeRow = "0";
        this.myName = "Krishna";
        this.getStudentMasterData();
    }
    studentsComponent.prototype.getStudentMasterData = function () {
        var _this = this;
        this.http.get('/Api/SampleData').subscribe(function (result) {
            _this.student = result.json();
        });
    };
    studentsComponent.prototype.getStudentsDetails = function (StudID) {
        this.open = true;
        this.studentDetail = this.student[StudID - 1];
        //this.http.get('/Api/SampleData/' + StudID).subscribe(result => {
        //    this.studentDetail = result.json();
        //    console.log(this.studentDetail);
        //});
    };
    studentsComponent.prototype.Save = function (studentDetail) {
        if ((this.student[studentDetail.StdID - 1] != null
            && this.student[studentDetail.StdID - 1] != undefined)
            && studentDetail.StdID == this.student[studentDetail.StdID - 1].StdID) {
            alert("Updated successfully");
        }
        else {
            alert("Saved successfully");
            this.student.push(studentDetail);
        }
    };
    studentsComponent.prototype.Delete = function (studid) {
        this.student.splice(studid - 1);
        alert("Deleted successfully");
    };
    studentsComponent.prototype.Cancel = function () {
        this.open = false;
    };
    studentsComponent.prototype.Add = function () {
        this.open = true;
        this.studentDetail = {};
    };
    studentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            templateUrl: './app/components/students/students.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], studentsComponent);
    return studentsComponent;
}());
exports.studentsComponent = studentsComponent;
//# sourceMappingURL=students.component.js.map