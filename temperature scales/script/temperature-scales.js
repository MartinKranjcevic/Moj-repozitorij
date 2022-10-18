  let c = document.getElementById("celsius");
  let f = document.getElementById("fahr");
  let k = document.getElementById("kelvin");
  let r = document.getElementById("rankine");

  c.oninput = function() {
      f.value = (c.value * 9/5) + 32;
      k.value = (c.value * 1) + 273.15; 
      r.value = ((c.value * 1) + 273.15) * 9/5;
  };

  f.oninput = function() {
      c.value = ((f.value * 1) - 32) * 5/9;
      k.value = ((f.value * 1) + 459.67) * 5/9;
      r.value = (f.value * 1) + 459.67;
  };

  k.oninput = function() {
      c.value = (k.value * 1) - 273.15;
      f.value = (k.value * 9/5) - 459.67;
      r.value = k.value * 9/5;
  };

  r.oninput = function() {
      c.value = ((r.value * 1) - 491.67) * 5/9;
      f.value = (r.value * 1) - 459.67;
      k.value = r.value * 5/9;
  };
