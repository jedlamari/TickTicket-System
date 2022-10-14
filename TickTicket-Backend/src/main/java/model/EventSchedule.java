package model;
import org.springframework.data.annotation.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Entity
public class EventSchedule {

    public enum DayOfWeek { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }
    private UUID id;
    private LocalDateTime start;
    private LocalDateTime end;
    private boolean isRecurrent;
    private ArrayList<DayOfWeek> recurrences;

    public EventSchedule() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public boolean isRecurrent() {
        return isRecurrent;
    }

    public void setRecurrent(boolean recurrent) {
        isRecurrent = recurrent;
    }

    public ArrayList<DayOfWeek> getRecurrences() {
        return recurrences;
    }

    public void setRecurrences(ArrayList<DayOfWeek> recurrences) {
        this.recurrences = recurrences;
    }

}