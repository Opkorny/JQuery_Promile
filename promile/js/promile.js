$(function () {
    let person = {
        sex: 'muž',
        weight: 80,
        time: 24,
        alcohol: function () {
            tvrdy = 0;
            pivo = 0;
            vino = 0;
            jine = 0;
            if ($("#tvrdy").prop('checked')) {
                tvrdy = ($("#m_tvrdy").val() * 50 * 40 * 0.8) / 100
            }
            if ($("#pivo").prop('checked')) {
                pivo = ($("#m_pivo").val() * 500 * 5 * 0.8) / 100
            }
            if ($("#vino").prop('checked')) {
                vino = ($("#m_vino").val() * 300 * 10 * 0.8) / 100
            }
            if ($("#jine").prop('checked')) {
                jine = ($("#m_jine").val() * 100 * $("#p_jine").val() * 0.8) / 100
            }
            return (tvrdy + pivo + vino + jine);
        },
        odbourano: function(){
            beta = 0;
            if(person.sex === "žena"){
                beta = 0.085
            } else beta = 0.1;
            return (person.weight*beta*$("#time").val());
        },
        promile: function () {
            promile = 0;
            if(person.sex === "žena"){
                r = 0.6
            } else r = 0.7;
            if ((this.alcohol()-this.odbourano())/(person.weight*r)<0) return 0;
            else return ((this.alcohol()-this.odbourano())/(person.weight*r)).toFixed(2);
        }
    }
    $("#calc").on("click", function () {
        person.weight = $("#weight").val();
        person.sex = $("#woman").prop("checked") ? "žena": "muž";
        $("#result").html(`Hladina alkoholu v krvi je ${person.promile()} ‰`);
    })
});