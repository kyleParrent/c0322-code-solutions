const express = require('express');
const pg = require('pg');

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const expressJson = express.json();
app.use(expressJson);

app.listen(3000, () => {
  process.stdout.write('Server is watching on port 3000!');
});

app.get('/api/grades/', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db
    .query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res, next) => {
  const newGrade = req.body;
  if (!newGrade.name) {
    res.status(400).json({
      error: 'request must contain a name'
    });
    return;
  } else if (!newGrade.course) {
    res.status(400).json({
      error: 'request must contain a course'
    });
    return;
  } else if (!newGrade.score) {
    res.status(400).json({
      error: 'request must contain a score'
    });
    return;
  } else if (newGrade.score > 100 || newGrade.score < 0) {
    res.status(400).json({
      error: 'request score must be between 0 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning * ;
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];
  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const newGrade = req.body;
  const theGradeId = Number(req.params.gradeId);
  if (!newGrade.name) {
    res.status(400).json({
      error: 'request must contain a name'
    });
    return;
  } else if (!newGrade.course) {
    res.status(400).json({
      error: 'request must contain a course'
    });
    return;
  } else if (!newGrade.score) {
    res.status(400).json({
      error: 'request must contain a score'
    });
    return;
  } else if (!Number.isInteger(theGradeId) || theGradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    update  "grades"
    set     "name" = $1,
            "course" = $2,
            "score" = $3
    where   "gradeId" = $4
    returning * ;
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score, theGradeId];
  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${theGradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const theGradeId = Number(req.params.gradeId);
  if (!Number.isInteger(theGradeId) || theGradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from  "grades"
    where   "gradeId" = $1
    returning * ;
  `;
  const params = [theGradeId];
  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${theGradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
