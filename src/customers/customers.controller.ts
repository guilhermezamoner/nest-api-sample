import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer-dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    @HttpCode(200)
    findAll(): CustomerDto[] {
        return this.customersService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findById(@Param('id') id: string): CustomerDto {
        return this.customersService.findById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() createCustomerDto: CustomerDto): Promise<CustomerDto>{
        return this.customersService.create(createCustomerDto);
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: string, @Body() updateCustomerDto: CustomerDto): Promise<CustomerDto> {
        return this.customersService.updateById(id, updateCustomerDto);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string)  {
        this.customersService.deleteById(id);
    }

}