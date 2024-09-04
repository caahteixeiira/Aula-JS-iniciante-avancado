const validUaValues = [
    'valor1', 'valor2', 'valor3', 'valor4', 'valor5',
    'valor6', 'valor7', 'valor8', 'valor9', 'valor10', 'valor11',
    'valor12', 'valor13', 'valor14', 'valor15', 'valor16',
    'valor17', 'valor18', 'valor19', 'valor20', 'valor21',
    'valor22', 'valor23', 'valor24', 'valor25', 'valor26',
    'valor27', 'valor28', 'valor29', 'valor30', 'valor31',
];

document.getElementById('myForm').addEventListener('submit', function(event) {
    const selectUa = document.getElementById('UA');
    const errorMessage = document.querySelector('.span-required');
    if (validUaValues.indexOf(selectUa.value) === -1) {
        errorMessage.style.display = 'inline';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.display = 'none';
    }
});