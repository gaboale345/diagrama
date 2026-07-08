const views = {
  all: {
    label: 'Todos',
    title: 'Vista general del sistema',
    description: 'Se muestran los actores principales y los casos de uso de clientes, empleados y administradores.',
    diagram: `flowchart LR
      classDef actor fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
      classDef usecase fill:#0f766e,stroke:#34d399,stroke-width:2px,color:#ecfeff;

      subgraph A[Actores]
        C[Cliente]
        E[Empleado]
        A1[Administrador]
        U[Usuario]
      end

      subgraph S[Sistema]
        U1[Registrarse]
        U2[Iniciar sesión]
        U3[Recuperar contraseña]
        U4[Actualizar perfil]
        U5[Registrar vehículo]
        U6[Gestionar vehículos]
        U7[Solicitar servicio]
        U8[Seleccionar tipo de servicio]
        U9[Programar fecha y hora]
        U10[Cancelar reserva]
        U11[Consultar estado]
        U12[Realizar pago]
        U13[Ver historial]
        U14[Calificar servicio]
        U15[Aceptar o rechazar reserva]
        U16[Iniciar servicio]
        U17[Finalizar servicio]
        U18[Administrar empleados]
        U19[Administrar inventario]
        U20[Generar reportes]
      end

      C --> U1
      C --> U2
      E --> U2
      A1 --> U2
      U --> U3
      C --> U4
      E --> U4
      C --> U5
      C --> U6
      C --> U7
      U7 -->|incluye| U8
      U7 -->|incluye| U9
      C --> U10
      C --> U11
      C --> U12
      C --> U13
      C --> U14
      E --> U15
      E --> U16
      E --> U17
      A1 --> U18
      A1 --> U19
      A1 --> U20
      U3 -.->|extiende| U2

      class C,E,A1,U actor;
      class U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14,U15,U16,U17,U18,U19,U20 usecase;`,
    summary: [
      { title: 'Cobertura', text: 'Cubre los flujos de clientes, empleados y administración del sistema.' },
      { title: 'Relación principal', text: 'Los clientes registran vehículos, solicitan servicios y gestionan reservas.' },
      { title: 'Operaciones administrativas', text: 'El administrador gestiona personal, inventario y reportes de negocio.' }
    ]
  },
  cliente: {
    label: 'Cliente',
    title: 'Casos de uso del cliente',
    description: 'Se enfocan en registro, reserva, pago, seguimiento y valoración del servicio.',
    diagram: `flowchart LR
      classDef actor fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
      classDef usecase fill:#0f766e,stroke:#34d399,stroke-width:2px,color:#ecfeff;

      C[Cliente]
      U1[Registrarse]
      U2[Iniciar sesión]
      U3[Recuperar contraseña]
      U4[Actualizar perfil]
      U5[Registrar vehículo]
      U6[Gestionar vehículos]
      U7[Solicitar servicio]
      U8[Seleccionar tipo de servicio]
      U9[Programar fecha y hora]
      U10[Cancelar reserva]
      U11[Consultar estado]
      U12[Realizar pago]
      U13[Ver historial]
      U14[Calificar servicio]

      C --> U1
      C --> U2
      C --> U3
      C --> U4
      C --> U5
      C --> U6
      C --> U7
      U7 -->|incluye| U8
      U7 -->|incluye| U9
      C --> U10
      C --> U11
      C --> U12
      C --> U13
      C --> U14
      U3 -.->|extiende| U2

      class C actor;
      class U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14 usecase;`,
    summary: [
      { title: 'Registro', text: 'El cliente puede crear su cuenta y recuperar el acceso si lo necesita.' },
      { title: 'Servicios', text: 'Puede registrar vehículos, reservar lavados y gestionar pagos.' },
      { title: 'Seguimiento', text: 'También revisa el estado de su reserva y valora la experiencia.' }
    ]
  },
  empleado: {
    label: 'Empleado',
    title: 'Casos de uso del empleado',
    description: 'El empleado gestiona reservas y atiende el proceso de lavado desde la aceptación hasta el cierre.',
    diagram: `flowchart LR
      classDef actor fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
      classDef usecase fill:#0f766e,stroke:#34d399,stroke-width:2px,color:#ecfeff;

      E[Empleado]
      U2[Iniciar sesión]
      U4[Actualizar perfil]
      U15[Aceptar o rechazar reserva]
      U16[Iniciar servicio]
      U17[Finalizar servicio]

      E --> U2
      E --> U4
      E --> U15
      E --> U16
      E --> U17

      class E actor;
      class U2,U4,U15,U16,U17 usecase;`,
    summary: [
      { title: 'Atención', text: 'Recepciona reservas y decide si las acepta o rechaza.' },
      { title: 'Ejecución', text: 'Inicia y finaliza el proceso de lavado para cada servicio.' },
      { title: 'Perfil', text: 'Mantiene su cuenta actualizada para operar con el sistema.' }
    ]
  },
  admin: {
    label: 'Administrador',
    title: 'Casos de uso del administrador',
    description: 'Permite controlar recursos, personal y reportes del negocio.',
    diagram: `flowchart LR
      classDef actor fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
      classDef usecase fill:#0f766e,stroke:#34d399,stroke-width:2px,color:#ecfeff;

      A[Administrador]
      U2[Iniciar sesión]
      U18[Administrar empleados]
      U19[Administrar inventario]
      U20[Generar reportes]

      A --> U2
      A --> U18
      A --> U19
      A --> U20

      class A actor;
      class U2,U18,U19,U20 usecase;`,
    summary: [
      { title: 'Gestión de personal', text: 'Administra empleados y acceso al sistema.' },
      { title: 'Inventario', text: 'Supervisa los productos y recursos disponibles.' },
      { title: 'Reportes', text: 'Genera información útil para ventas y desempeño del negocio.' }
    ]
  }
};

const buttonsContainer = document.getElementById('viewButtons');
const diagramContainer = document.getElementById('diagram');
const summaryContainer = document.getElementById('summaryContent');

function createButtons() {
  Object.entries(views).forEach(([key, view]) => {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.dataset.view = key;
    button.textContent = view.label;
    button.addEventListener('click', () => renderView(key));
    buttonsContainer.appendChild(button);
  });
}

function renderSummary(view) {
  summaryContainer.innerHTML = `
    <div class="summary-list">
      <div class="summary-item">
        <strong>${view.title}</strong>
        <span>${view.description}</span>
      </div>
      ${view.summary
        .map(
          (item) => `
            <div class="summary-item">
              <strong>${item.title}</strong>
              <span>${item.text}</span>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

async function renderView(viewKey) {
  const view = views[viewKey];
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === viewKey);
  });

  renderSummary(view);
  diagramContainer.innerHTML = '<p>Cargando diagrama...</p>';

  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: '#0f172a',
      primaryTextColor: '#f8fafc',
      lineColor: '#5eead4',
      tertiaryColor: '#111827'
    }
  });

  try {
    const { svg } = await mermaid.render(`diagram-${viewKey}`, view.diagram);
    diagramContainer.innerHTML = svg;
  } catch (error) {
    diagramContainer.innerHTML = '<p>No se pudo cargar el diagrama.</p>';
    console.error(error);
  }
}

createButtons();
renderView('all');
