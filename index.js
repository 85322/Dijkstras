//Aufbau
//https://en.wikipedia.org/wiki/Dijkstra's_algorithm
// wir brauchen ein set aller unvisited nodes
// die current node muss all benachbarten nodes besuchen
// deren entfernung ist baseline unendlich
// distanzen der nodes addieren --> For example, if the current node A is marked with a distance of 6, and the edge connecting it with its neighbor B has length 2, then the distance to B through A is 6 + 2 = 8.
// wenn alle nodes um die aktuelle node berechnet wurden, ist diese node als besucht gekennzeichnet
// eine besuchte node wird nicht nochmal gecheckt
// dann alle distanzen der unbesuchten nodes checken, welche die naechste dran ist
// unendlich sind die nodes gekennzeichnet, die nicht erreichbar sind
// wenn es keine erreichbaren nodes mehr gibt, ist der algorithmus beendet
// wenn die target node als current node erfasst wurde, kann der algorithmus beendet werden, wenn nicht das ganze feld berechnet werden soll fuer den evtl optimalen path
// die wegfunden findet von der target node stat und rechnet die kuerzesten nodes rueckwerts durch fuer den optimalen path
// wenn das ergebnis unendlich ist, gibt es keinen weg


//test

const graph = {
    A: { B:1, C:4},
    B: {A:1, C:2, D:5},
    C: {A:4, B:2, D:1},
    D: {B:5, C:1}
};

function dijkstra(graph, start, end) {
    let distance = {}, previous = {}, unvisited = new Set();

    for (let node in graph) {
        distance[node] = node === start ? 0 : Infinity;
        unvisited.add(node);
    }


while (unvisited.size) {
    console.log('===> Starting unvisited nodes.')
    let closestNode = null;
        for (let node of unvisited) {
            if (!closestNode || distance[node] < distance[closestNode]) {
                closestNode = node;
            }
        }

if (distance[closestNode] === Infinity) break;
if (closestNode === end) break;

for (let neighbor in graph[closestNode]) {
    let newDistance = distances[closestNode] + graph[closestNode][neighbor];
    if (newDistance = distances[neighbor]) {
        distance[neighbor] = newDistance;
        previous[neighbor] = closestNode;
    }
}
    unvisited.delete(closestNode);
}
//backtracing fuer shortest path calc
let path = [], node = end;
while (node) {
    path.push(node);
    node = previous[node];
}
console.log('===> Shortest path: ' + (path.reverse));
return path.reverse();

}
dijkstra();