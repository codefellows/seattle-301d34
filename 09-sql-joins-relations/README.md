![CF](https://i.imgur.com/7v5ASc8.png)  Class 9: SQL Joins & Relations
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*The purpose of this class is to introduce the concepts of database normalization through the use of SQL joins.*

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
* [SQLBolt (Lessons 6-7) (Essential)](http://sqlbolt.com/lesson/select_queries_with_joins)
* [A Primer on SQL (Chapter 11) (Reference)](https://ia801302.us.archive.org/6/items/aprimeronsql/aprimeronsql.pdf)
* [Visual Guide to SQL Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)

## Daily Plan
- Announcements
  - We removed the last Partner Power Hour report assignment from Canvas--you don't have to fill out that report on your presentation day.
- Code Review
- New Material
- Code Demos
- Lab Preview

## Learning Objectives

- Understand how objects in a database can be interrelated with foreign keys
- Have familiarity with queries using SQL that select data from across multiple tables
- Have familiarity with different relationships in database tables

## Code Review Warmup Questions

1. What is the difference between these two pieces of code?

```js
const dataObject = { title: 'Title Words', author: 'Me' };
// snippet 1
$.ajax({
  method: 'POST',
  url: '/articles',
  data: dataObject,
  success: data => console.log(data)
});

// snippet 2
$.post('/articles', dataObject, data => console.log(data));
```

2. Fill in this table.

| CRUD word | HTTP method | SQL command |
|-----------|-------------|-------------|
| Create | | |
| Read | | |
| Update | | |
| Delete | | |
