export class Recept {

    public id?: string = '';
    public receptNev: string = '';
    public kategoria: string = '';
    public konyha: string = '';
    public adag: string = '';
    public nehezseg: string ='';
    public koltseg: string ='';

    public elfogadottRecept: boolean = false;
    public elokeszulesiIdo: number = 0;
    public elkeszitesiIdo: number = 0;
    public sutesiIdo: number = 0;
    public sutesiMod: string = '';  


    public sutesiHofok: number = 0;
    
    public glutenmentes: boolean = false;
    public cukrotTartalmaz: boolean = false;
    public tojasmentes: boolean = false;
    public laktozmentes: boolean = false;
    public tejmentes: boolean = false;



    public date: string = '';
    public hozzavalo: string = '';
    public elkeszites: string = '';
    
}
