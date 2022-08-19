export function createCharacterMapper(resource:any){
    return {
        image:resource.image,
        name:resource.name,
        age:resource.age,
        weight:resource.weight,
        history:resource.history
    }
}
export function deleteCharacterMapper(resource:any){
    return {
        id:resource.id
    }
}

export function updateCharacterMapper(resource:any):Record<string,string>{
    return {
        id:resource.id,
        image:resource.image,
        name:resource.name,
        age:resource.age,
        weight:resource.weight,
        history:resource.history
    }
}
export function findQueryCharacterMapper(resource:any):Record<string,string | number>{
    let field=Object.keys(resource)[0]
    let querys:Record<string,string>={
        name:"name",
        age:"name",
        movies:"movie",
        weight:"weight",
        movie:"movie",
      }
      
    if(!(querys[field])){
        throw new Error()

    }
    return {
        field,
        value:resource[field]   
    }
}