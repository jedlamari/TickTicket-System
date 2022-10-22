package tickticket.dao;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tickticket.model.Ticket;
import tickticket.model.User;
import tickticket.model.Event;

import java.util.List;
import java.util.UUID;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, UUID> {
    boolean existsByEventAndUser(Event event, User user);
    List<Ticket> findTicketsByUser(User user);
    List<Ticket> findTicketsByEvent(Event event);
    Optional<Ticket> findTicketByEventAndUser(Event event, User user);
}