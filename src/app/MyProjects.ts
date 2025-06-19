export class MyProjects{
    name :string;
    description :string;
    imgUrl :string;
    techs :string[]=[];

    constructor(name :string , description :string, imgUrl :string, techs :string[]){
      this.name=name;
      this.description=description;
      this.imgUrl=imgUrl;
      this.techs = techs;
    }
}