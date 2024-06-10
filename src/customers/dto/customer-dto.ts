export class CustomerDto {
    id: string;
    readonly name: string;
    readonly age: number;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly country: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}