
document.addEventListener('DOMContentLoaded', () => {
    const coldWaterTemp = localStorage.getItem('coldWaterTemp') || 5
    const hotWaterTemp = localStorage.getItem('hotWaterTemp') || 55
    const coldWaterCost = localStorage.getItem('coldWaterCost') || 0.00392
    const hotWaterCost = localStorage.getItem('hotWaterCost') || 0.00821

    document.getElementById('cold-water').value = coldWaterTemp
    document.getElementById('hot-water').value = hotWaterTemp
    document.getElementById('cold-water-cost').value = coldWaterCost
    document.getElementById('hot-water-cost').value = hotWaterCost
})

document.getElementById('cold-water-btn').addEventListener('click', () => {
    const coldWaterTempInput = document.getElementById('cold-water')
    const hotWaterTempInput = document.getElementById('hot-water')
    const coldWaterTemp = Number(coldWaterTempInput.value)
    const hotWaterTemp = Number(hotWaterTempInput.value)

    if (coldWaterTemp < 0) {
        alert('Cold Water Temperature cannot be negative.')
        coldWaterTempInput.value = 5
        return
    }

    if (coldWaterTemp >= hotWaterTemp) {
        alert('Cold Water Temperature must be less than Hot Water Temperature.')
        coldWaterTempInput.value = 5
        return;
    }

    if (coldWaterTemp >= 100) {
        alert('Cold Water Temperature must be less than 100.')
        coldWaterTempInput.value = 5
        return
    }

    localStorage.setItem('coldWaterTemp', coldWaterTemp)
})

document.getElementById('hot-water-btn').addEventListener('click', () => {
    const hotWaterTempInput = document.getElementById('hot-water')
    const coldWaterTempInput = document.getElementById('cold-water')
    const hotWaterTemp = Number(hotWaterTempInput.value)
    const coldWaterTemp = Number(coldWaterTempInput.value)

    if (hotWaterTemp < 0) {
        alert('Hot Water Temperature cannot be negative.')
        hotWaterTempInput.value = 55
        return
    }

    if (hotWaterTemp <= coldWaterTemp) {
        alert('Hot Water Temperature must be greater than Cold Water Temperature.')
        hotWaterTempInput.value = 55
        return
    }

    if (hotWaterTemp >= 100) {
        alert('Hot Water Temperature must be less than 100.')
        hotWaterTempInput.value = 55
        return
    }

    localStorage.setItem('hotWaterTemp', hotWaterTemp);
})

document.getElementById('cold-water-cost-btn').addEventListener('click', () => {
    const coldWaterCostInput = document.getElementById('cold-water-cost')
    const coldWaterCost = Number(coldWaterCostInput.value)

    if (coldWaterCost < 0) {
        alert('Cold Water Cost cannot be negative.')
        coldWaterCostInput.value = 0.00392
        return
    }

    localStorage.setItem('coldWaterCost', coldWaterCost)
})

document.getElementById('hot-water-cost-btn').addEventListener('click', () => {
    const hotWaterCostInput = document.getElementById('hot-water-cost')
    const hotWaterCost = Number(hotWaterCostInput.value)

    if (hotWaterCost < 0) {
        alert('Hot Water Cost cannot be negative.')
        hotWaterCostInput.value = 0.00821
        return
    }

    localStorage.setItem('hotWaterCost', hotWaterCost)
})