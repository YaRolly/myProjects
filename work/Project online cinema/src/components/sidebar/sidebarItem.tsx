import { useState, useEffect } from "react";

interface interfaceSidebar  { 
  value: number,
  genre: string,
  isReset: boolean,
  filterGenre: (a: number[]) => void,
  reset: (a: boolean) => void, genres: number[] 
}

export function SidebarItem({ value, genre, isReset, filterGenre, reset, genres } :  interfaceSidebar) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      if (isReset) {
        setChecked(false);
      }
    }, [isReset]);

    return(
        <li className="sidebar__genre--item">
            <label>
                <input type="checkbox" checked={!isReset ? checked : false} onChange={() => {
                    if (checked === false) {
                        filterGenre([...genres, value]);
                        setChecked(true);
                        reset(false);
                      } else {
                        setChecked(false);
                        filterGenre(genres.filter((item) => item !== value));
                      }
                }} />
                <span>{genre}</span>
            </label>
        </li>
    )
}