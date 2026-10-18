# Manual Improvements & Refactoring Examples

## 1. Type Safety
```tsx
// AI output
const [movies, setMovies] = useState<any[]>([]);

// My improvement
import { Movie } from '@services/omdb';
const [movies, setMovies] = useState<Movie[]>([]);
```

---

### 2. JSX Parse Error
```tsx
// AI output (invalid comment inside props)
<MovieCard id={movie.imdbID} {/* comment */} />

// My fix
{/* Pass imdbID for navigation */}
<MovieCard id={movie.imdbID} />
```

### 3. Favorites Persistence
```tsx
// AI output: no persistence
const [favorites, setFavorites] = useState<Movie[]>([]);

// My improvement: added localStorage support
useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) setFavorites(JSON.parse(saved));
}, []);

const addFavorite = (movie: Movie) => {
  const newFav = [...favorites, movie];
  setFavorites(newFav);
  localStorage.setItem("favorites", JSON.stringify(newFav));
};

```

### 4. Theme Toggle Integration
```tsx
// AI output: static dark theme only
<body className="dark">

// My improvement: dynamic toggle
const [theme, setTheme] = useState<'dark' | 'light'>('dark');
useEffect(() => {
  document.body.className = theme;
}, [theme]);
```