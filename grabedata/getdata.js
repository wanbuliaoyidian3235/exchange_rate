fetch('https://v6.exchangerate-api.com/v6/c0ed877744748a76608cef26/latest/USD')
    .then(response => response.json())
    .then(data => {
        const audRate = data.conversion_rates.AUD;
        const gbpRate = data.conversion_rates.GBP;
        const arsRate = data.conversion_rates.ARS;
        document.getElementById('aud').textContent = audRate;
        document.getElementById('gbp').textContent = gbpRate;
        document.getElementById('ars').textContent = arsRate;
    });
