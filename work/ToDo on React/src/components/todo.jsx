import { Priority } from "./priority";
import { PRIORITY} from "./const";
import { useScreen } from "./screen";

export function ToDo() {
    const { width, isMobile, isDesktop } = useScreen();
    console.log(width, isMobile, isDesktop);
    
    return (
        <section className="todo">
            <div className="container">
                <Priority priority={PRIORITY.HIGH} className="high" />
                <Priority priority={PRIORITY.LOW} className="low"/>
            </div>
        </section>
    )
}

