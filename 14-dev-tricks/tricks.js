const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello I am a %s string!', 'dogs');

    // Styled
    console.log('%c i am some text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

    // warning!
    console.warn('Wrong');

    // Error :
    console.error('error');

    // Info
    console.info('Crocodiles eat 3-4 people a year');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'Wrong');


    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    
    
    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`this is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('kevin');
    console.count('kevin');
    console.count('Jiang');
    console.count('kevin');
    console.count('kevin');
    console.count('kevin');
    console.count('Jiang');
    console.count('kevin');
    console.count('kevin');
    console.count('Jiang');
    console.count('Jiang');
    console.count('kevin');
    console.count('Jiang');
    console.count('Jiang');
    console.count('Jiang');

    // timing
    console.time('fetching data');
    fetch('https://www.google.com')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });
    
    // table
    console.table(dogs);