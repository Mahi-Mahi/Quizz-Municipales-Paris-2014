/* global define */"use strict";define([],function(){return["$scope","$rootScope","$location","$route","dataService",function(e,t,n,r,i){function o(){e.question_idx=0;console.log(e.questions.length+" questions");s()}e.mode=r.current.$$route.originalPath.replace("/app/","");switch(e.mode){case"quizz":console.log("init quizz");e.answers=[];t.results={nkm:0,ah:0};break;case"resultats":}e.setAnswer=function(n){if(e.mode=="quizz"){e.answers[e.question_idx]=n;angular.forEach(e.questions[e.question_idx].answers[n].score,function(e,n){t.results[n]+=e?1:0});e.nextQuestion()}};e.nextQuestion=function(){e.question_idx++;s()};var s=function(){if(e.question_idx<e.questions.length){e.question=e.questions[e.question_idx];console.log(e.question)}else n.path("/app/resultats")};e.questions?o():i.getData(function(t){e.questions=t.questions;o()})}]});