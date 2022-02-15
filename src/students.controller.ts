import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller('students')
export class StudentsController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getNames() {
        return this.appService.getNames();
    }
}
