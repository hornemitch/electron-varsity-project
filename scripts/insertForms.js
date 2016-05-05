function createClinicForm(){
    var form = document.getElementById('enterForm');

    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var column3 = document.createElement('div');

    column1.className = 'col-md-4';
    column2.className = 'col-md-4';
    column3.className = 'col-md-4';

    var head1 = document.createElement('h3');
    var head2 = document.createElement('h3');
    var head3 = document.createElement('h3');
    var head4 = document.createElement('h3');
    var head5 = document.createElement('h3');
    var head6 = document.createElement('h3');

    var head1Text = document.createTextNode('State');
    var head2Text = document.createTextNode('City');
    var head3Text = document.createTextNode('ZIP Code');
    var head4Text = document.createTextNode('Street');
    var head5Text = document.createTextNode('Telephone Number');
    var head6Text = document.createTextNode('Fax Number');

    head1.appendChild(head1Text);
    head2.appendChild(head2Text);
    head3.appendChild(head3Text);
    head4.appendChild(head4Text);
    head5.appendChild(head5Text);
    head6.appendChild(head6Text);

    var textBox1 = document.createElement('input');
    var textBox2 = document.createElement('input');
    var textBox3 = document.createElement('input');
    var textBox4 = document.createElement('input');
    var textBox5 = document.createElement('input');
    var textBox6 = document.createElement('input');

    textBox1.type = 'text';
    textBox1.placeholder = 'Enter State';
    textBox1.id = 't1';
    textBox2.type = 'text';
    textBox2.placeholder = 'Enter City';
    textBox2.id = 't2';
    textBox3.type = 'text';
    textBox3.placeholder = 'Enter ZIP Code';
    textBox3.id = 't3';
    textBox4.type = 'text';
    textBox4.placeholder = 'Enter Street';
    textBox4.id = 't4';
    textBox5.type = 'text';
    textBox5.placeholder = 'Enter Telephone Number';
    textBox5.id = 't5';
    textBox6.type = 'text';
    textBox6.placeholder = 'Enter Fax Number';
    textBox6.id = 't6';

    column1.appendChild(head1);
    column1.appendChild(textBox1);
    column1.appendChild(head4);
    column1.appendChild(textBox4);

    column2.appendChild(head2);
    column2.appendChild(textBox2);
    column2.appendChild(head5);
    column2.appendChild(textBox5);

    column3.appendChild(head3);
    column3.appendChild(textBox3);
    column3.appendChild(head6);
    column3.appendChild(textBox6);

    form.appendChild(column1);
    form.appendChild(column2);
    form.appendChild(column3);
}