query Q1{
  description: "Select all drivers older than 65."
  statement:
      SELECT org.example.Driver
          WHERE (age>65)
}

query Q18 {
    description: "Select all drivers aged older than PARAM"
    statement:
        SELECT org.example.Driver
            WHERE (_$ageParam < age)
                ORDER BY [lastName DESC, firstName DESC]
}


