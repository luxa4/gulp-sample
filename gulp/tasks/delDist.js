import del from 'del';

export default function delDist() {
  return del(app.path.clean);
};
