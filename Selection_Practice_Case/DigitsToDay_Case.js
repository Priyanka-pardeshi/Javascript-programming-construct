function DigitToDay()
{
switch (new Date().getDay()) {
    case 0:
        Text = 'Sunady';
        break;
    case 1:
        Text = 'Mon';
        break;

    case 2:
        Text = 'tue';
        break;

    case 3:
        Text = 'Wed';
        break;
    case 4:
        Text = 'thu';
        break;
    case 5:
        Text = 'fri';
        break;

    case 6:
        Text = 'Sat';
        break;
}
}
DigitToDay();