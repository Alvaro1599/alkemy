export function createMovieMapper(resource:any){
    return {
        image: resource.image,
        title: resource.title,
        history: resource.history,
        review: resource.review
    }
}
export function deleteMovieMapper(resource:any){
    return {
        id:resource.id
    }
}

export function updateMovieMapper(resource:any):Record<string,string>{
    return {
        image: resource.image,
        title: resource.title,
        history: resource.history,
        review: resource.review
    }
}
export function findQueryMovieMapper(resource:any):Record<string,string | number>{
    let field=Object.keys(resource)[0]
    let querys:Record<string,string>={
        image:"image",
        title:"title",
        history:"history",
        review:"review",
      }
      
    if(!(querys[field])){
        throw new Error()

    }
    return {
        field,
        value:resource[field]   
    }
}