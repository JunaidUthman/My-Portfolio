export class MyProjects{
    name :string;
    description :string;
    imgUrl :string;
    techs :string[]=[];
    githubLink :string = "";

    constructor(name :string , description :string, imgUrl :string, techs :string[], githubLink : string){
      this.name=name;
      this.description=description;
      this.imgUrl=imgUrl;
      this.techs = techs;
      this.githubLink = githubLink;
    }
}