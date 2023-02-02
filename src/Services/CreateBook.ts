import { ApiProperty } from "@nestjs/swagger";

export class create{

@ApiProperty()
    BookName : String
    @ApiProperty()
    Author: String
    @ApiProperty()
    BookPrice : number

}

export class UpdateBook{
@ApiProperty()
id:number
@ApiProperty()
BookName:String
@ApiProperty()
Author:String
@ApiProperty()
BookPrice:number


}


export class FindBook {
@ApiProperty()
id:number

}

export class DeleteBook{
@ApiProperty()
id:number

}




