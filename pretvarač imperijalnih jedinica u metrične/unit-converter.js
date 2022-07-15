/*duljina*/

/*varijable*/
  let ich = document.getElementById("inch"); /* "in" kao oznaka (ime varijable) za "inch" se ne može koristiti, umjesto toga koristi se "ich" */
  let ft = document.getElementById("feet");
  let yd = document.getElementById("yard");
  let mi = document.getElementById("mile");

  let cm = document.getElementById('centimeter');
  let m = document.getElementById('meter');
  let km = document.getElementById('kilometer');

/*imperijalne jedinice*/

  ich.oninput = function() {
      ft.value = ich.value / 12;
      yd.value = ich.value / 36;
      mi.value = ich.value / (36*1760);

      cm.value = ich.value * 2.54;
      m.value = ich.value * 0.0254;
      km.value = ich.value * 0.0000254;
  };

  ft.oninput = function() {
      ich.value = ft.value * 12;
      yd.value = ft.value / 3;
      mi.value = ft.value / (1760 * 3);

      cm.value = ft.value * 30.48;
      m.value = ft.value * 0.3048;
      km.value = ft.value * 0.0003048;
  };

  yd.oninput = function(){
      ich.value = yd.value * 36;
      ft.value = yd.value * 3;
      mi.value = yd.value / 1760;

      cm.value = yd.value * 91.44;
      m.value = yd.value * 0.9144;
      km.value = yd.value * 0.0009144;
  };

  mi.oninput = function() {
      ich.value = mi.value * 1760 * 36;
      ft.value = mi.value * (1760 * 3);
      yd.value = mi.value * 1760;

      cm.value = mi.value * 160934.4;
      m.value = mi.value * 1609.344;
      km.value = mi.value * 1.609344;
  };

/*metrične jedinice*/

cm.oninput = function() {
    ich.value = cm.value / 2.54;
    ft.value = cm.value / 30.48;
    yd.value = cm.value / 91.44;
    mi.value = cm.value / 160934.4;

    m.value = cm.value / 100;
    km.value = cm.value / 100000;
};

m.oninput = function() {
    ich.value = m.value / 0.0254;
    ft.value = m.value / 0.3048;
    yd.value = m.value / 0.9144;
    mi.value = m.value / 1609.344;

    cm.value = m.value * 100;
    km.value = m.value / 1000;
};

km.oninput = function() {
    ich.value = km.value / 0.0000254;
    ft.value = km.value / 0.0003048;
    yd.value = km.value / 0.0009144;
    mi.value = km.value / 1.609344;

    cm.value = km.value * 100000;
    m.value = km.value * 1000;
};

/*Masa*/

/*varijable*/
let oz = document.getElementById('ounce');
let lbs = document.getElementById('pound');
let ta = document.getElementById('ton');

let g = document.getElementById('gram');
let kg = document.getElementById('kilogram');
let tb = document.getElementById('tonne');

/*imperijalne oznake*/

oz.oninput = function() {
    lbs.value = oz.value / 16;
    ta.value = oz.value * 0.0000279017857;

    g.value = oz.value * 28.349523125;
    kg.value = oz.value * 0.028349523125;
    tb.value = oz.value * 0.0000283495231;
};

lbs.oninput = function() {
    oz.value = lbs.value * 16;
    ta.value = lbs.value * 0.000446428571;

    g.value = lbs.value * 453.59237;
    kg.value = lbs.value * 0.45359237;
    tb.value = lbs.value * 0.00045359237;
};

ta.oninput = function() {
    oz.value = ta.value / 0.0000279017857;
    lbs.value = ta.value / 0.000446428571;

    g.value = ta.value * 1016046.91;
    kg.value = ta.value * 1016.04691;
    tb.value = ta.value * 1.01604691;
};

/*metrične oznake*/

g.oninput = function() {
    oz.value = g.value / 28.349523125;
    lbs.value = g.value / 453.59237;
    ta.value = g.value / 1016046.91;

    kg.value = g.value / 1000;
    tb.value = g.value / 1000000;
};

kg.oninput = function() {
    oz.value = kg.value / 0.028349523125;
    lbs.value = kg.value / 0.45359237;
    ta.value = kg.value /1016.0469;

    g.value = kg. value * 1000;
    tb.value = kg.value / 1000;
}

tb.oninput = function() {
  oz.value = tb.value / 0.0000279017857;
  lbs.value = tb.value / 0.000446428571;
  ta.value = tb.value / 1.01604691;

  g.value = tb.value * 1000000;
  kg.value = tb.value * 1000;
}
