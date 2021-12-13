(function () {

    const notas = {
        "c": new Audio('./notas/middle_c.mp3'),
        "d": new Audio('./notas/middle_d.mp3'),
        "e": new Audio('./notas/middle_e.mp3'),
        "f": new Audio('./notas/middle_f.mp3'),
        "g": new Audio('./notas/middle_g.mp3'),
        "a": new Audio('./notas/middle_a.mp3'),
        "b": new Audio('./notas/middle_b.mp3'),
        "c2": new Audio('./notas/high_c.mp3'),

        "c_sharp": new Audio('./notas/mid_c_sharp.mp3'),
        "d_sharp": new Audio('./notas/mid_d_sharp.mp3'),
        "f_sharp": new Audio('./notas/mid_f_sharp.mp3'),
        "g_sharp": new Audio('./notas/mid_g_sharp.mp3'),
        "a_sharp": new Audio('./notas/mid_a_sharp.mp3'),

    }

    document.addEventListener('mousedown', reproduz);

    function reproduz(e) {
        const target = e.target;
        let nota = target.dataset.note;
        notas[nota]?.play()

    }
})();