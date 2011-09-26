(function (window, document)
{
    var rLeftTrim = /^\s+/;
    var rRightTrim = /\s+$/;
    
    var phpFunction = prompt('Please input PHP function name');
    var cleaned = phpFunction.replace(rLeftTrim, '').replace(rRightTrim, '');
    if (cleaned)
    {
      window.open('http://php.net/' + cleaned,'_newtab');
    }
}(window, document));