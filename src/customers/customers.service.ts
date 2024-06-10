import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { CustomerDto } from './dto/customer-dto';
import { CustomerNotFoundException } from "./exceptions/customer-not-found-exception";

@Injectable()
export class CustomersService {

    private readonly customers: CustomerDto[] = [];

    create(createCustomerDto: CustomerDto): CustomerDto {
        createCustomerDto.id = uuidv4();
        this.customers.push(createCustomerDto);
        return createCustomerDto;
    }

    findAll(): CustomerDto[] {
        return this.customers;
    }

    findById(id: string): CustomerDto {
        let result = this.customers.find(customer => customer.id === id);

        if (result == null) {
            throw new CustomerNotFoundException(id);
        }

        return result;
    }

    updateById(id: string, updateCustomerDto: CustomerDto): CustomerDto {
        let customer = this.findById(id);
        return { ...customer, ...updateCustomerDto };
    }

    deleteById(id: string): void {
        let index = this.customers.findIndex(customer => customer.id === id);

        if (index === -1) {
            throw new CustomerNotFoundException(id);
        }

        this.customers.splice(index, 1);
    }

}