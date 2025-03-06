const BlueprintApp = (function() {
    let blueprints = [];

    async function getBlueprints(author) {
        console.log(`Fetching blueprints for author: ${author}`);
        try {
            const response = await fetch(`/blueprints/${author}`);
            if (response.ok) {
                blueprints = await response.json();
                console.log('Blueprints fetched successfully:', blueprints);
                displayBlueprints();
            } else {
                console.error('Error fetching blueprints');
            }
        } catch (error) {
            console.error('Error fetching blueprints', error);
        }
    }

    function displayBlueprints() {
        console.log('Displaying blueprints:', blueprints);
        const table = document.getElementById('blueprintsTable');
        table.innerHTML = `
            <tr>
                <th>Blueprint name</th>
                <th>Number of points</th>
                <th>Action</th>
            </tr>
        `;
        blueprints.forEach(bp => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bp.name}</td>
                <td>${bp.points.length}</td>
                <td><button onclick="BlueprintApp.openBlueprint('${bp.name}')">Open</button></td>
            `;
            table.appendChild(row);
        });
    }

    function openBlueprint(name) {
        console.log(`Opening blueprint: ${name}`);
        // Implement the logic to open and display the blueprint
    }

    return {
        getBlueprints: getBlueprints,
        openBlueprint: openBlueprint
    };
})();

window.BlueprintApp = BlueprintApp;