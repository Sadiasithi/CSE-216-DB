const oracledb = require('oracledb');


async function run() {
    const connection = await oracledb.getConnection({
        user          : 'TTPROJECT',
        password      : 'tt', 
        connectString : "localhost/orclpdb",
    });

    const result = await connection.execute('SELECT DISTRICT FROM "TTPROJECT"."SELLER_LOCATION"');
    console.log("Result is:", result.rows);
    const result2 = await connection.execute('SELECT THANA FROM "TTPROJECT"."SELLER_LOCATION"');
    console.log("Result is:", result2.rows);

    await connection.close();  
}

run();