import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

declare var nameArr:Array<Object>;

let debug = require('debug')('ng:app');
let template = require('./template.html');
let style = require('./style.less');


@Component({
    selector: 'app',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES]
})
export default class App {
    public students:Array<Object> = [];
    public selectedStudents:Array<Object> = [];
    public multiStudent:Boolean = false;
    private _studentNum:Number = 1;

    public studentNo:Array<number> = [1];

    public curr:Array<Object> = [];

    public timer:Array<any> = [];

    public running:Boolean = false;


    public set studentNum(val) {
        this._studentNum = val;
        this.studentNo = [];
        for (let i = 1; i <= val; i++) {
            this.studentNo.push(i);
        }
        this.randAll();
    }

    public get studentNum() {
        return this._studentNum;
    }

    constructor() {
        setInterval(()=> {
            this.students = nameArr;
        }, 200);


        // for (let i = 0; i < 100; i++) {
        //     this.students.push({id: i, name: '张' + i})
        // }

        this.randAll();
    }

    begin(event) {
        if (this.running) {
            return;
        }
        this.running = true;
        this.timer.push(setInterval(()=>this.randAll(), 100));
    }

    rand() {
        return this.students[parseInt(Math.random() * this.students.length + '')]
            || {name: '', id: ''};
    }

    randAll() {
        this.curr = [];
        for (let i = 0; i < this.studentNum; i++) {
            this.curr.push(this.rand());
        }
    }

    end(event) {
        if (this.running) {
            this.running = false;
            this.timer.forEach((i)=>clearInterval(i));
            for (let i of this.curr) {
                this.selectedStudents.push(i);
            }
        }
    }

    clear(event) {
        this.selectedStudents = [];
    }
}