using DataAcsessLayer.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreGenericRepsoitory<TEntity, TContext> : IGenericRepository<TEntity> where TEntity : class
        where TContext : DbContext, new()
    {
       
            public void Create(TEntity entity)
            {
                using (var db = new TContext())
                {
                    db.Set<TEntity>().Add(entity);
                    db.SaveChanges();
                }
            }

            public void Delete(int id)
            {
                using (var db = new TContext())
                {
                    var entity = db.Set<TEntity>().Find(id);
                    db.Set<TEntity>().Remove(entity);
                    db.SaveChanges();
                }
            }

            public List<TEntity> GetAll()
            {
                using (var db = new TContext())
                {
                    return db.Set<TEntity>().ToList();
                }
            }

            public TEntity GetById(int id)
            {
                using (var db = new TContext())
                {
                    return db.Set<TEntity>().Find(id);
                }
            }

            public virtual void Update(TEntity entity)
            {
                using (var db = new TContext())
                {
                    db.Set<TEntity>().Update(entity);
                    db.SaveChanges();
                }
            }
        }
}
