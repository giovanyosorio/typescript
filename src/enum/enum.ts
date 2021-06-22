enum DiasLaborales {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
  }
  
  enum DiasFinSemana {
    Sabado = 'SAT',
    Domingo = 'SUN'
  }
  
  const Semana = {
    ...DiasLaborales,
    ...DiasFinSemana
  }
  
  console.log(Semana.Lunes); // MON
  console.log(Semana.Sabado); // SAT