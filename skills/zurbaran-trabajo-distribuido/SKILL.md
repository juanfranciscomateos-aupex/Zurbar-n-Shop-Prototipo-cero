---
name: zurbaran-trabajo-distribuido
description: Coordinar, ejecutar, revisar o relevar encargos de Zurbarán Shop en Notion y GitHub desde distintos equipos.
---

# Trabajo distribuido en Zurbarán Shop

## Si coordinas

- Confirma si tienes el turno principal o de reserva. Usa el registro de asignaciones vigente antes de repartir.
- Crea tarjetas pequeñas con ID, objetivo, responsable, dependencias, rama, base, archivos previstos, criterio de entrega y revisor humano.
- Asigna según disponibilidad declarada y alcance. Si hay un servicio de reservas, confirma la reserva antes de dar la tarea por asignada. Si no lo hay, el coordinador humano asigna en Notion.
- Al retomar el turno, concilia las tarjetas con ramas, PR y relevos. Un equipo desconectado no implica una tarea libre.

## Si ejecutas

1. Confirma persona, equipo, herramienta, encargo y tiempo disponible. Si el servicio permite registrar disponibilidad, usa su mecanismo real. Si careces de acceso, pide al responsable que lo anote en Notion.
2. Lee la tarjeta y las instrucciones del repositorio. Comprueba asignación, rama, commit base y estado de Git. Si falta confirmar la asignación o el alcance, prepara un diagnóstico sin modificar los archivos compartidos.
3. Trabaja solo en el encargo. Respeta cambios ajenos. Si hay un conflicto de alcance o un bloqueo, deja constancia en la tarjeta.
4. Comprueba el resultado con las pruebas del proyecto o con el criterio acordado. Entrega resumen, pruebas realizadas, límites y enlace a la rama o al PR. Marca «Para revisar» si tienes acceso; si no, proporciona el texto a la persona responsable.
5. Si falta coordinación, continúa únicamente encargos propios vigentes o marcados para trabajo autónomo y asignados a la persona que te dirige.

## Si hay relevo

Guarda un RELEVO.md con ID, rama y commit o checkpoint, archivos cambiados, pruebas, pendientes y siguiente acción. Asegúrate de que quien recibe el trabajo puede leer tanto el relevo como los cambios. Si solo está guardado en tu equipo, decláralo y deja la entrega pendiente.

## Si revisas

Contrasta la evidencia con la tarjeta y la revisión exacta. Pasa tus observaciones a la persona revisora. La aprobación, la integración y la publicación las decide una persona autorizada.
