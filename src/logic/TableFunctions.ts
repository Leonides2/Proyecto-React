

function parseUserToTable(users: User[]): Table {
    const columnNames: (keyof User)[] = [ 'id','address', 'name','lastName', 'job','phone',  'birthdate', 'addAt',];

    const columns: Column[] = columnNames.map(columnName => {
        // Para cada nombre de columna, crear una columna con el título igual al nombre de la columna
        return {
            title: columnName,
            // Para cada fila de la columna, asignar el valor del atributo correspondiente del usuario
            rows: users.map(user => ({ content: user[columnName] }))
        };
    });

    const table: Table = {
        columns: columns
    };

    return table;
}

export default parseUserToTable