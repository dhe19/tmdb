
interface StylingProps {
    className?: string;
  }  

interface Movie {
    title: string;
    releaseDate: string;
    genres: Array<string>;
    rate: number;
    imgPath: string;

  }


interface FullMovie extends Movie{
    backdropPath:string;
    overview:string;
    status:string;
    tagline:string;
    budget:number;
    revenue:number;
    originalLanguage:string;
    homepage:string;
    runtime:number;
}
//https://developer.themoviedb.org/reference/movie-external-ids
interface MovieSocialMedia {
  facebook:string;
  instagram:string;
  twitter:string;
}

//https://developer.themoviedb.org/reference/movie-keywords
interface MovieKeyword{
    keywords:Array<String>;
}


interface Cast{
    name:string;
    imageProfile:string;
    character:string;
    knownForDepartment:string;
}

