export default async function getDataUser() {
    try {
      const response = await fetch('https://dummyjson.com/user/me', {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzQzMTYzNTIsImV4cCI6MTczNDMxODE1Mn0.Y0hgcNMMhuviq1THuae4U8oxY-4l_NFF033BEwpYhkA`,
        },
      });
      const data = await response.json();

      console.log('Usuário context:', data);
      return data;
    } catch (error) {
      return null;
    }
}