"use strict";
class Department {
    //Shortcut to initialize fields
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private id: string;
        //   private name: String;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}
class AccountDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found!");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass in a valid value!");
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "ACCOUNTING");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment("d2", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log(`Accounting Depatment ID : ${this.id}`);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log(Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.printEmployeeInformation();
it.describe();
//const accounting = new AccountDepartment("d2", []);
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();
console.log(accounting, accounting2);
accounting.addReport("Something went wrong...");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.mostRecentReport = "Year end Report";
accounting.printEmployeeInformation();
accounting.getReports();
accounting.describe();
console.log(accounting.mostRecentReport);
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
