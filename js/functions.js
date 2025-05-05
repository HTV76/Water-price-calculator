document.getElementById('amount-water-btn').addEventListener('click', () => {
    const amountWaterInput = document.getElementById('amount-water')
    const amountWater = Number(amountWaterInput.value)

    if (amountWater < 0) {
        alert('Amount of water cannot be negative.')
        amountWaterInput.value = 100
        return
    }

    calculateConsumption()
});

document.getElementById('output-temp-btn').addEventListener('click', calculateConsumption)

document.getElementById('alternative-output-temp-btn').addEventListener('click', () => {
    const alternativeOutputTempInput = document.getElementById('alternative-output-temp')
    const alternativeOutputTemp = Number(alternativeOutputTempInput.value)

    calculateAlternativeConsumption()
    calculateCostDifference()
});

function calculateConsumption() {
    const coldWaterTemp = Number(localStorage.getItem('coldWaterTemp')) || 5
    const hotWaterTemp = Number(localStorage.getItem('hotWaterTemp')) || 55
    const coldWaterCostPerLiter = Number(localStorage.getItem('coldWaterCost')) || 0.00392
    const hotWaterCostPerLiter = Number(localStorage.getItem('hotWaterCost')) || 0.0082

    const outputTemp = Number(document.getElementById('output-temp').value)
    const amountWater = Number(document.getElementById('amount-water').value)

    if (outputTemp < coldWaterTemp || outputTemp > hotWaterTemp) {
        alert('Output temperature must be between cold and hot water temperatures.')
        return
    }

    const hotWaterConsumption = ((outputTemp - coldWaterTemp) / (hotWaterTemp - coldWaterTemp)) * amountWater
    const coldWaterConsumption = amountWater - hotWaterConsumption

    document.getElementById('hot-water-consumption').value = hotWaterConsumption.toFixed(1)
    document.getElementById('cold-water-consumption').value = coldWaterConsumption.toFixed(1)

    const totalCost = (coldWaterConsumption * coldWaterCostPerLiter) + (hotWaterConsumption * hotWaterCostPerLiter)
    document.getElementById('cost-of-water').value = totalCost.toFixed(2)
}

function calculateAlternativeConsumption() {
    const coldWaterTemp = Number(localStorage.getItem('coldWaterTemp')) || 5
    const hotWaterTemp = Number(localStorage.getItem('hotWaterTemp')) || 55
    const coldWaterCostPerLiter = Number(localStorage.getItem('coldWaterCost')) || 0.00392
    const hotWaterCostPerLiter = Number(localStorage.getItem('hotWaterCost')) || 0.00821

    const alternativeOutputTemp = Number(document.getElementById('alternative-output-temp').value)
    const amountWater = Number(document.getElementById('amount-water').value);

    if (alternativeOutputTemp < coldWaterTemp || alternativeOutputTemp > hotWaterTemp) {
        alert('Alternative Output Temperature must be between cold and hot water temperatures.')
        return
    }

    const hotWaterConsumption = ((alternativeOutputTemp - coldWaterTemp) / (hotWaterTemp - coldWaterTemp)) * amountWater
    const coldWaterConsumption = amountWater - hotWaterConsumption;

    document.getElementById('alternative-hot-water').value = hotWaterConsumption.toFixed(1)
    document.getElementById('alternative-cold-water').value = coldWaterConsumption.toFixed(1)

    const totalCost = (coldWaterConsumption * coldWaterCostPerLiter) + (hotWaterConsumption * hotWaterCostPerLiter)
    document.getElementById('alternative-cost').value = totalCost.toFixed(2)
}

function calculateCostDifference() {
    const costOfWater = Number(document.getElementById('cost-of-water').value)
    const alternativeCost = Number(document.getElementById('alternative-cost').value)

    const differenceInEuros = alternativeCost - costOfWater
    const differenceInPercent = (differenceInEuros / costOfWater) * 100

    document.getElementById('cost-difference-euros').value = differenceInEuros.toFixed(2)
    document.getElementById('cost-difference-percent').value = differenceInPercent.toFixed(1)
}