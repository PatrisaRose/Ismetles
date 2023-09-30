class ListaMegjelenit {
  constructor(ListaAdat, TARTALOM) {
    this.ListaAdat = ListaAdat;
    this.TARTALOM = TARTALOM;
    let Lista = this.htmlOsszeallit(ListaAdat);
    this.TARTALOM.html(Lista);
  }

  htmlOsszeallit(ListaAdat) {
    let Lista = "<ul>";
    for (let i = 0; i < ListaAdat.length; i++) {
      Lista += "<li>" + ListaAdat[i] + "</li>";
    }
    Lista += "</ul>";
    return Lista;
  }
}

export default ListaMegjelenit;
