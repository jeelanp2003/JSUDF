/*
--DROP TABLE employees PURGE;
--DROP TABLE departments PURGE;

CREATE TABLE departments (
  department_id   NUMBER(2) CONSTRAINT departments_pk PRIMARY KEY,
  department_name VARCHAR2(14),
  location        VARCHAR2(13)
);

DECLARE

INSERT INTO departments VALUES (10,'ACCOUNTING','NEW YORK');
INSERT INTO departments VALUES (20,'RESEARCH','DALLAS');
INSERT INTO departments VALUES (30,'SALES','CHICAGO');
INSERT INTO departments VALUES (40,'OPERATIONS','BOSTON');
COMMIT;


CREATE TABLE employees (
  employee_id   NUMBER(4) CONSTRAINT employees_pk PRIMARY KEY,
  employee_name VARCHAR2(10),
  job           VARCHAR2(9),
  manager_id    NUMBER(4),
  hiredate      DATE,
  salary        NUMBER(7,2),
  commission    NUMBER(7,2),
  department_id NUMBER(2) CONSTRAINT emp_department_id_fk REFERENCES departments(department_id)
);

INSERT INTO employees VALUES (7369,'SMITH','CLERK',7902,to_date('17-12-1980','dd-mm-yyyy'),800,NULL,20);
INSERT INTO employees VALUES (7499,'ALLEN','SALESMAN',7698,to_date('20-2-1981','dd-mm-yyyy'),1600,300,30);
INSERT INTO employees VALUES (7521,'WARD','SALESMAN',7698,to_date('22-2-1981','dd-mm-yyyy'),1250,500,30);
INSERT INTO employees VALUES (7566,'JONES','MANAGER',7839,to_date('2-4-1981','dd-mm-yyyy'),2975,NULL,20);
INSERT INTO employees VALUES (7654,'MARTIN','SALESMAN',7698,to_date('28-9-1981','dd-mm-yyyy'),1250,1400,30);
INSERT INTO employees VALUES (7698,'BLAKE','MANAGER',7839,to_date('1-5-1981','dd-mm-yyyy'),2850,NULL,30);
INSERT INTO employees VALUES (7782,'CLARK','MANAGER',7839,to_date('9-6-1981','dd-mm-yyyy'),2450,NULL,10);
INSERT INTO employees VALUES (7788,'SCOTT','ANALYST',7566,to_date('13-JUL-87','dd-mm-rr')-85,3000,NULL,20);
INSERT INTO employees VALUES (7839,'KING','PRESIDENT',NULL,to_date('17-11-1981','dd-mm-yyyy'),5000,NULL,10);
INSERT INTO employees VALUES (7844,'TURNER','SALESMAN',7698,to_date('8-9-1981','dd-mm-yyyy'),1500,0,30);
INSERT INTO employees VALUES (7876,'ADAMS','CLERK',7788,to_date('13-JUL-87', 'dd-mm-rr')-51,1100,NULL,20);
INSERT INTO employees VALUES (7900,'JAMES','CLERK',7698,to_date('3-12-1981','dd-mm-yyyy'),950,NULL,30);
INSERT INTO employees VALUES (7902,'FORD','ANALYST',7566,to_date('3-12-1981','dd-mm-yyyy'),3000,NULL,20);
INSERT INTO employees VALUES (7934,'MILLER','CLERK',7782,to_date('23-1-1982','dd-mm-yyyy'),1300,NULL,10);
COMMIT;

SELECT d.department_name,
       e.employee_name
FROM   departments d
       JOIN employees e ON d.department_id = e.department_id
WHERE  d.department_id >= 30
ORDER BY d.department_name;

END;

DEPARTMENT_NAM EMPLOYEE_N
-------------- ----------
SALES          ALLEN
SALES          BLAKE
SALES          JAMES
SALES          MARTIN
SALES          TURNER
SALES          WARD

6 rows selected.
*/

function exampleforinnerjoin(){
var querybegin=BEGIN WORK;
querybegin.close();

var insertquery = INSERT INTO departments VALUES (uuid(),{"department_id":"10","department_name":"ACCOUNTING","location":"NEW YORK"});
insertquery.close();
var insertquery = INSERT INTO departments VALUES (uuid(),{"department_id":"20","department_name":"RESEARCH","location":"DALLAS"});
insertquery.close();
var insertquery = INSERT INTO departments VALUES (uuid(),{"department_id":"30","department_name":"SALES","location":"CHICAGO"});
insertquery.close();
var insertquery = INSERT INTO departments VALUES (uuid(),{"department_id":"40","department_name":"OPERATIONS","location":"BOSTON"});
insertquery.close();
var query = COMMIT WORK;
query.close();


var querybegin=BEGIN WORK;
querybegin.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7369","employee_name":'SMITH',"job":'CLERK',"manager_id":"7902","salary":"800","commission":"NULL","department_id":"20"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7499","employee_name":'ALLEN',"job":'SALESMAN',"manager_id":"7698","salary":"1600","commission":"300","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7521","employee_name":'WARD',"job":'SALESMAN',"manager_id":"7698","salary":"1250","commission":"500","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7566","employee_name":'JONES',"job":'MANAGER',"manager_id":"7839","salary":"2975","commission":"NULL","department_id":"20"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7654","employee_name":'MARTIN',"job":'SALESMAN',"manager_id":"7698","salary":"1250","commission":"1400","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7698","employee_name":'BLAKE',"job":'MANAGER',"manager_id":"7839","salary":"2850","commission":"NULL","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7782","employee_name":'CLARK',"job":'MANAGER',"manager_id":"7839","salary":"2450","commission":"NULL","department_id":"10"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7788","employee_name":'SCOTT',"job":'ANALYST',"manager_id":"7566","salary":"3000","commission":"NULL","department_id":"20"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7839","employee_name":'KING',"job":'PRESIDENT',"manager_id":"NULL","salary":"5000","commission":"NULL","department_id":"10"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7844","employee_name":'TURNER',"job":'SALESMAN',"manager_id":"7698","salary":"1500","commission":"0","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7876","employee_name":'ADAMS',"job":'CLERK',"manager_id":"7788","salary":"1100","commission":"NULL","department_id":"20"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7900","employee_name":'JAMES',"job":'CLERK',"manager_id":"7698","salary":"950","commission":"NULL","department_id":"30"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7902","employee_name":'FORD',"job":'ANALYST',"manager_id":"7566","salary":"3000","commission":"NULL","department_id":"20"});
insertquery.close();
var insertquery = INSERT INTO employees VALUES (uuid(),{"employee_id":"7934","employee_name":'MILLER',"job":'CLERK',"manager_id":"7782","salary":"1300","commission":"NULL","department_id":"10"});
insertquery.close();
var query = COMMIT WORK;
query.close();

var crindex = create index idx1 on employees(department_id);
var crindex1 = CREATE PRIMARY INDEX ON `default`:`departments`;
var query = SELECT d.department_name, e.employee_name FROM departments d INNER JOIN employees e ON d.department_id = e.department_id WHERE d.department_id >= "30" ORDER BY d.department_name;
var result = [];
for (const row of query) {
    result.push(row);
    }
query.close();
return result;
}
