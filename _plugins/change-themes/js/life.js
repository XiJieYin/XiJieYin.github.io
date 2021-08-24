class Life{
    whatCanIDo(alive){
        if(alive==0){
            return "dead";
        }
        return "work"
    }
}
new Life().whatCanIDo(1);