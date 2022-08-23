import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class alterStatements1661253440428 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('statements', new TableColumn({
            name: 'sender_id',
            type: 'uuid',
            isNullable: true
        })
        )

        await queryRunner.changeColumn(
            'statements',
            'type',
            new TableColumn({
                name: 'type',
                type: 'enum',
                enum: ['deposit', 'withdraw', 'transfer']
            })
        )

        await queryRunner.createForeignKey('statements', new TableForeignKey({
            name: 'statements_sender_id_fk',
            columnNames: ['sender_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('statements', 'statements_sender_id_fk');
        await queryRunner.changeColumn(
            'statements',
            'type',
            new TableColumn({
                name: 'type',
                type: 'enum',
                enum: ['deposit', 'withdraw']
            })
        )
        await queryRunner.dropColumn('statements', 'sender_id');
    }
}
